document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.frame-768');
  const template = container.querySelector('.frame-558');

  const menuData = [
    {
      label: 'Laptop',
      url: 'index.html',
      dropdown: [
        { title: 'Theo dòng', items: ['MSI', 'DELL', 'ACER'] },
        { title: 'Theo giá tiền', items: ['Dưới 10 triệu', 'Từ 10–20 triệu', 'Trên 20 triệu'] }
      ]
    },
    {
      label: 'Chuột',
      url: 'mouse.html',
      dropdown: [
        { title: 'Thương hiệu', items: ['Logitech', 'Razer', 'Corsair'] },
        { title: 'Mức giá', items: ['Dưới 500k', '500k–1 triệu', 'Trên 1 triệu'] }
      ]
    },
    {
      label: 'Bàn phím',
      url: 'keyboard.html',
      dropdown: [
        { title: 'Loại phím', items: ['Cơ', 'Giả cơ'] },
        { title: 'Giá', items: ['< 1 triệu', '1–3 triệu', '> 3 triệu'] }
      ]
    }
  ];

  function buildDropdown(dropdown) {
    const menu = document.createElement('div');
    menu.className = 'dropdown-menu';
    dropdown.forEach(cat => {
      const category = document.createElement('div');
      category.className = 'category';

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = cat.title;
      title.style.fontWeight = 'bold';
      title.style.marginBottom = '8px';
      title.style.color = '#222';
      category.appendChild(title);

      cat.items.forEach(text => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        category.appendChild(a);
      });
      menu.appendChild(category);
    });
    return menu;
  }

  menuData.forEach((item, i) => {
    if (i === 0) {
      // Cập nhật template
      const label = template.querySelector('div.laptop');
      label.textContent = item.label;
      label.onclick = () => window.location.href = item.url;

      // Thêm dropdown menu
      const oldDropdown = template.querySelector('.dropdown-menu');
      oldDropdown.replaceWith(buildDropdown(item.dropdown));
      return;
    }

    // Clone và tạo frame mới
    const clone = template.cloneNode(true);
    clone.querySelector('div.laptop').textContent = item.label;
    clone.querySelector('div.laptop').onclick = () => window.location.href = item.url;
    clone.querySelector('.dropdown-menu').replaceWith(buildDropdown(item.dropdown));
    container.appendChild(clone);
  });
});