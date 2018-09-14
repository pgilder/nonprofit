Template.chatterpost.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Chatter.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Chatter.remove(this._id);
  },
});
