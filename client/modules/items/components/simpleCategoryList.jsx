import React from 'react';
import { FlatButton } from 'material-ui';

import CategoryButton from '../containers/CategoryButton';

class SimpleCategoryList extends React.Component {
    render() {
        const {categories} = this.props;
        return (
            <div>
                {categories.map(category => (
                    <CategoryButton key={category._id} category={category} />
                ))}
                <FlatButton onClick={this.clearSelectedCategory.bind(this)} label="全部" />
            </div>
        )
    }

    clearSelectedCategory() {
        const {clearSelectedCategory} = this.props;
        clearSelectedCategory();
    }
}

export default SimpleCategoryList;