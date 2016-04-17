import React from 'react';
// import { FlatButton } from 'material-ui';
import {Button} from 'react-bootstrap'

import CategoryButton from '../containers/CategoryButton';

class SimpleCategoryList extends React.Component {
    clearSelectedCategory() {
        const {clearSelectedCategory} = this.props;
        clearSelectedCategory();
    }

    render() {
        const {categories} = this.props;
        return (
            <div>
                {categories.map(category => (
                    <CategoryButton key={category._id} category={category} />
                ))}
                <Button onClick={this.clearSelectedCategory.bind(this)}>全部</Button>
            </div>
        )
    }
}

export default SimpleCategoryList;