

# Security Rules





```ts
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  	
    function loggedIn() {
    	return request.auth.token.email != null;
    }
    
    function getList(listID) {
    	return get(/databases/$(database)/documents/lists/$(listID));
    }
    
  	function isOwner(resource) {
    	return resource.data.owner == request.auth.token.email;
    }
    
    function isShared(resource) {
    	return request.auth.token.email in resource.data.usersSharedWith ||
      request.auth.token.email in resource.data.pendingUsers;
    }
    
    function canModifyList(listID,request) {
    		return getList(listID).data.owner == request.auth.token.email ||
        request.auth.token.email in getList(listID).data.usersSharedWith
    }
    
    function noForbiddenUpdates(request,resource) {
    		return !request.resource.data.diff(resource.data).affectedKeys().hasAny([
        "owner","id","title"
        ])
    }
    
  
    match /users/{userId}/{allPaths=**} {
    	allow read, write: if loggedIn() && request.auth.uid == userId;
    }
    
    match /lists/{listID}/{documents=**}{
     allow read: if loggedIn() && isOwner(resource) || loggedIn() && isShared(resource)
     allow create: if loggedIn()
     allow delete: if loggedIn() && isOwner(resource)
     allow update: if loggedIn() && isOwner(resource) 
     || loggedIn() && isShared(resource) && noForbiddenUpdates(request,getList(listID))
 
 		 match /tasks/{task} {
      allow read,create,delete,update: if loggedIn() && canModifyList(listID,request)
    }
    

    
    

    }
  }
}
```