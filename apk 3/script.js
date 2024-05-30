document.addEventListener('DOMContentLoaded', function() {
    var newActivityInput = document.getElementById('new-activity-input');
    var addActivityButton = document.getElementById('add-activity-button');
    var activityList = document.getElementById('activity-list');

    addActivityButton.addEventListener('click', function() {
        var activityText = newActivityInput.value.trim();
        if (activityText !== '') {
            addActivity(activityText);
            newActivityInput.value = '';
        }
    });

    function addActivity(text) {
        var activityItem = document.createElement('li');
        activityItem.classList.add('activity-item');

        var activityText = document.createElement('span');
        activityText.classList.add('activity-text');
        activityText.textContent = text;
        activityItem.appendChild(activityText);

        var activityActions = document.createElement('div');
        activityActions.classList.add('activity-actions');

        var editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editButton.classList.add('edit-button');
        activityActions.appendChild(editButton);

        var deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i> Delete';
        deleteButton.classList.add('delete-button');
        activityActions.appendChild(deleteButton);

        activityItem.appendChild(activityActions);
        activityList.appendChild(activityItem);

        editButton.addEventListener('click', function() {
            var newText = prompt('Edit kegiatan Anda:', activityText.textContent);
            if (newText !== null && newText.trim() !== '') {
                activityText.textContent = newText;
            }
        });

        deleteButton.addEventListener('click', function() {
            activityList.removeChild(activityItem);
        });
    }
});
