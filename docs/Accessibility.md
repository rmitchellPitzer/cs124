# Accessibility

For this lab, we need to make the to-do app
accessible. This includes satisfying these requirements:

1. Add aria-labels to each interactive component
2. Ensure the problem tags are used for different portions of the all
3. Make sure that screen readers can read the application
4. Ensure that users with low vision can view the app

In addition to these accessibility requirements,
we need to record a video which showcases two things:
1. The application being used entirely from the keyboard
2. The application running using a screen-reader

---------------------------------------------------------
# Video
The video can be found [here](https://www.youtube.com/watch?v=jf4MoXNucXs)
# Changes

1. Rework of how tasks are edited to make it more accessible and stable when filters are applied
2. Addition of FavIcon and Proper Title
3. Rework of the Action Button to make it more accessible by requiring only a single click to add a task
4. Addition of a condition drop-down to the completed task section
5. Several backend overhauls that can be found in commits
6. Rework of Undo Button to make it more appealing
7. Converted every clickable element to a button and ensured that it can be outlined during tab
8. Added Hotkey events for all operations including task creation, deletion, etc.
9. Wrote code that automatically focuses important elements when menus are brought into focus and defocused 
10. Added clear, descriptive aria-labels to each task so that for each component of a task a visually impaired user can tell which task it is for



