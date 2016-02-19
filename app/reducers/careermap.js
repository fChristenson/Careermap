'use strict';

let initState = {
  name: 'John Smith',
  steps: [

  {name: 'Contact', title: 'Engineer 1 - Developer', focus: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.', experience: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
  {name: 'Channelled', title: 'Engineer 2 - Developer', focus: 'focus', experience: 'experience'},
  {name: 'Assistance', title: 'Engineer 3 - Developer', focus: 'focus', experience: 'experience'},
  {name: 'Acqusition', title: 'Senior Engineer Developer', focus: 'focus', experience: 'experience'},
  {name: 'Application', title: 'Senior Engineer 2 - Developer', focus: 'focus', experience: 'experience'},
  {name: 'Impact', title: 'Lead Engineer - Developer', focus: 'focus', experience: 'experience'},
  {name: 'Mastery', title: 'Principal Engineer - Developer', focus: 'focus', experience: 'experience'}

  ],
  skillCategories: [
  {
    categoryName: 'Important skills',
    groups: [
    {
      groupName: 'Survival',
      skills: [
      {
        name: 'Cooking', 
        steps: [
        {name: 'Step 1', isCurrent: false, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 2', isCurrent: false, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 3', isCurrent: false, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 3', isCurrent: false, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'}
        ]
      }, 
      {
        name: 'Kung fu', 
        steps: [
        {name: 'Step 1', isCurrent: false, isDone: true, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 2', isCurrent: false, isDone: true, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 3', isCurrent: true, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'}
        ]
      }, 
      {
        name: 'Farming', 
        steps: [
        {name: 'Step 1', isCurrent: false, isDone: true, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 2', isCurrent: true, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 3', isCurrent: false, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 3', isCurrent: false, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'},
        {name: 'Step 3', isCurrent: false, isDone: false, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, metus id porta ultricies, nibh sapien venenatis nisi, in pretium nibh nulla id lorem. Fusce lobortis pharetra malesuada. Fusce non tellus orci. Sed ultrices sem ligula, vel posuere risus aliquet a. In non leo sed nisl molestie dignissim at ac arcu. Aenean non dolor volutpat, pellentesque felis ac, suscipit magna. Integer porttitor ornare mauris nec lacinia. Donec sagittis libero vitae tortor tincidunt, in pulvinar purus sagittis. Pellentesque bibendum vehicula urna, non rhoncus lectus. Integer volutpat venenatis maximus.'}
        ]
      }
      ]
    }
    ]
  }]
};

export default function(state = initState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
