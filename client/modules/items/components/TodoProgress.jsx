import React from 'react';
import LinearProgress from 'material-ui/lib/linear-progress';

const TodoProgress = ({percentage}) => (
    <div>
        <LinearProgress mode="determinate" value={percentage} color="Yellow"/>
    </div>
);

export default TodoProgress;