const menuCategories = [
  {
    title: 'Indian Cuisine',
    items: [
      {
        name: 'Paneer Tikka Platter',
        description: 'Smoky paneer tikka, vegetable kebabs, naan, and spiced chutneys for a festive spread.',
      },
      {
        name: 'Chana Masala Feast',
        description: 'Rich chickpea curry served with basmati rice, garlic naan, and pickled onions.',
      },
      {
        name: 'Street Food Chaat',
        description: 'Crispy samosa chaat, pani puri shots, and tangy bhelpuri for a lively vegetarian buffet station.',
      },
    ],
  },
  {
    title: 'Thai Cuisine',
    items: [
      {
        name: 'Vegetarian Pad Thai Set',
        description: 'Stir-fried rice noodles with tofu, peanuts, tamarind, and fresh lime.',
      },
      {
        name: 'Green Curry Bowl',
        description: 'Fragrant coconut curry with seasonal vegetables, tofu, and jasmine rice.',
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
