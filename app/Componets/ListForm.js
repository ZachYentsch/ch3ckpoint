export function listForm() {
  return `
    <form onsubmit="app.listsController.createList()">
    <div class="form-group">
      <input type="text" name="name" class="form-control" placeholder="Title..." minlength="3"
        maxlength="15" required>
    </div>
    <div m-3>
    <p>Color:</p>
    <input type="color">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button class="btn btn-success">Create List</button>
    </div>
   </form>
    `
}