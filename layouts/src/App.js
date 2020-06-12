import React from 'react';
import logo from './logo.svg';
import './App.css';

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mark : 'view_module'
        };
    }
    render() {
        return (
          <div>
            <div className="toolbar">
              <IconSwitch
                icon={this.state.mark}
                onSwitch={() => {
                  console.log("change state here");
                  this.setState({
                    mark: (this.state.mark === 'view_list') ? 'view_module' : 'view_list'
                  });
                } } />
            </div>
            {this.renderLayout(this.state.mark === 'view_module')}
          </div>
        );
    }
    renderLayout(cardView) {
        if (cardView) {
            return (
                <CardsView
                cards={this.props.products} />
            );
        }
        return (
            <ListView
            items={this.props.products} />
            );
    }
}

const IconSwitch = props => {
    const {icon, onSwitch} = props;
    const picture = 'img/' + icon + '.png'
    return (
      <div>
        <img src={picture} onClick={onSwitch}/>
      </div>
    );
};

const CardsView = props => {
    const {cards} = props;
    const renderCards = cards => {
        return cards.map((card) => {
            return (
                <div>
                    <ShopCard card = {card}/>
                </div>
            )
        });
    }
    return (
        <div>
            {renderCards(cards)}
        </div>
    );
}

const ListView = props => {
    const {items} = props;
    const renderItems = cards => {
        return items.map((item) => {
            return (
                <li>
                    <ShopCard card = {item}/>
                </li>
            )
        });
    }
    return (
        <div>
            {renderItems(items)}
        </div>
    );
}

const ShopCard = props => {
    const { card } = props;
    console.log(card);
    return (
      <div>
        <div>
          {card.name}
        </div>
        <div>
          {card.color}
        </div>
        <div>
          <figure>
              <img src={card.img} alt={card.name}/>
          </figure>
        </div>
  
        <div>
          <div>{card.price}</div>
          <Button label="Add to cart"/>
        </div>
      </div>
    );
  };

const Button = props => {
    const { label } = props;
    return (
      <button>
        {label}
      </button>
    );
};

export default Store;
