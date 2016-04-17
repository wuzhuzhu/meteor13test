export default {
    setCategory({Meteor, LocalState}, category) {
        if (!!category) {
            return LocalState.set('SELECTED_CATEGORY', category)
        }
    },
    clearSelectedCategory({LocalState}) {
        return LocalState.set('SELECTED_CATEGORY', null)
    }
};