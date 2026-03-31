const menuCategories = [
  {
    title: 'Indian Cuisine',
    items: [
      {
        name: 'Tandoori Platter',
        description: 'Smoky tandoori chicken, paneer tikka, naan, and spiced chutneys for a festive spread.',
      },
      {
        name: 'Butter Chicken Feast',
        description: 'Creamy tomato curry with tender chicken, saffron rice, and garlic naan.',
      },
      {
        name: 'Street Food Chaat',
        description: 'Crispy samosa chaat, pani puri shots, and tangy bhelpuri for a lively buffet station.',
      },
    ],
  },
  {
    title: 'Thai Cuisine',
    items: [
      {
        name: 'Pad Thai Set',
        description: 'Classic stir-fried rice noodles with shrimp, peanuts, tamarind, and lime.',
      },
      {
        name: 'Green Curry Bowl',
        description: 'Fragrant coconut curry with jasmine rice, vegetables, and your choice of protein.',
      },
      {
        name: 'Mango Sticky Rice',
        description: 'Sweet coconut sticky rice topped with ripe mango and toasted sesame.',
      },
    ],
  },
];

function Menu() {
  return (
    <section className="section" id="menu">
      <h2 className="section-title">Featured Menu</h2>
      <p className="section-description">
        Explore our signature Indian and Thai cuisine offerings. Each menu is tailored to deliver bold flavor,
        beautiful presentation, and easy event service.
      </p>
      <div className="menu-grid">
        {menuCategories.map((category) => (
          <div className="menu-category" key={category.title}>
            <h3>{category.title}</h3>
            {category.items.map((item) => (
              <article className="menu-card" key={item.name}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
