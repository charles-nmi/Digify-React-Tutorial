import React, { Component } from 'react';

export class ComponentWithState extends Component
{
  constructor({ isMorning })
  {
    super();

    /* Class components have a special object property called `states`.
      States can be used as values. When changed, it updates or re-renders
      the element/s it is used in. */
    this.state =
    {
      isMorning,
      elements: [],
    };

    this.addElement = () =>
    {
      /* Here, a new element is appended to the `elements` state. */
      const newElements = this.state.elements.concat(<div>New element!</div>);

      /* Updating the values of states should be done
        by using the `.setState()` class property (in class components). */
      this.setState({ elements: newElements });
    }
  }

  render()
  {
    return (
      <div>
        {
          this.state.isMorning?
            <h2><u>Good Morning</u></h2> :
            <h3><strong>Magandang Hapon</strong></h3>
        }
        <button onClick={() => this.setState({ isMorning: !this.state.isMorning })}>
          Change Time
        </button>
        <br/>
        <button onClick={this.addElement}>
          Add Element
        </button>
        <br/>
        <br/>
        {this.state.elements}
      </div>
    );
  }
}
