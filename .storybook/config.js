import { configure } from '@kadira/storybook';

function loadStories() {
  require('../client/modules/core/components/stories/appbar');
  require('../client/modules/core/components/stories/loginbutton');
  // require as many stories as you need.
}

configure(loadStories, module);