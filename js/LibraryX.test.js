import X from './LibraryX'

describe('Library X', () => {
  let root = '';
  beforeEach(() => {
    root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);
  })

  test("should load widgets inside the root", async () => {
    root.innerHTML = '<div>' +
      '<div widget="widgets/a"></div>' +
      '<div widget="widgets/b"></div>' +
    '</div>';
    const widgetLoader = X();
    await widgetLoader.init(root, () => {});

    expect(root.firstChild.hasChildNodes()).toBe(true);
  });

  test("should destroy widgets", async () => {
    root.innerHTML = '<div widget="widgets/a"></div>';
    const widgetLoader = X();
    await widgetLoader.init(root, () => {});

    widgetLoader.destroy(root);
    expect(root.firstChild.hasChildNodes()).toBe(false);
  });
})
