# Todo-List

A simple, interactive To-Do List web application that allows users to add, mark as completed, and delete tasks. The application uses `localStorage` to persist data, ensuring tasks are saved even after the page is refreshed.

## Features

- Add new tasks with a user-friendly input.
- Mark tasks as completed with a checkbox.
- Delete tasks from the list.
- Tasks are saved to `localStorage` for persistence.

## File Structure

- **HTML**: Contains the structure of the To-Do List.
- **CSS**: Styles the app, including the "checked" visual for completed tasks.
- **JavaScript**: Implements functionality for adding, deleting, marking tasks, and persisting data.

## How It Works

1. **Adding Tasks**:
   - Enter text in the input field and click the "Add" button.
   - The task will appear in the list with a checkbox and delete icon.

2. **Marking as Completed**:
   - Click the checkbox next to a task to toggle its completion state.
   - Completed tasks are styled differently.

3. **Deleting Tasks**:
   - Click the trash icon to remove a task from the list.

4. **Saving Tasks**:
   - All tasks are saved in the browser's `localStorage`.
   - On page reload, tasks are loaded automatically.
