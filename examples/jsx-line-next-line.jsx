<button>Add Item</button> {/* highlight-line */}

<ReactCSSTransitionGroup
  transitionName="example"
  transitionEnterTimeout={500}
  transitionLeaveTimeout={300}>
  {/* highlight-next-line */}
  {items}
</ReactCSSTransitionGroup>
</div>