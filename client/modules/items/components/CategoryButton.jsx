import React from 'react';
import { FlatButton } from 'material-ui';

class CategoryButton extends React.Component {
    render() {
        const {category} = this.props;
        return (
            <FlatButton key={category._id} label={category.name} onClick={this.setCategory.bind(this)} />
        )
    }

    setCategory() {
        const {category,setCategory} = this.props;
        setCategory(category._id);
    }
}


export default CategoryButton;