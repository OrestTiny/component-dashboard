# Component Dashboard 🎨

Інтерактивна бібліотека React компонентів з автоматичною темою та гарним дизайном.

## ✨ Особливості

- 🌙 **Автоматична тема** - темна тема з 20:00 до 6:00
- 🎨 **Гарний шрифт Inter** - сучасний та читабельний
- 📱 **Адаптивний дизайн** - працює на всіх пристроях
- 🔍 **Навігація** - швидкий перехід між компонентами
- 📋 **Копіювання коду** - одним кліком
- 🕐 **Ручне керування темою** - можна вимкнути автоматику

## 🚀 Деплой на GitHub Pages

### 1. Підготовка репозиторію

```bash
# Ініціалізуйте git репозиторій (якщо ще не зроблено)
git init

# Додайте всі файли
git add .

# Зробіть перший коміт
git commit -m "Initial commit: Component Dashboard"

# Створіть репозиторій на GitHub та додайте remote
git remote add origin https://github.com/YOURUSERNAME/component-dashboard.git

# Завантажте код на GitHub
git push -u origin main
```

### 2. Налаштування homepage

У файлі `package.json` замініть `yourusername` на ваш GitHub username:

```json
"homepage": "https://YOURUSERNAME.github.io/component-dashboard"
```

### 3. Деплой

```bash
# Запустіть деплой
npm run deploy
```

### 4. Налаштування GitHub Pages

1. Перейдіть у ваш репозиторій на GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` / `/ (root)`
5. Збережіть налаштування

Ваш сайт буде доступний за адресою: `https://YOURUSERNAME.github.io/component-dashboard`

## 🛠 Розробка

```bash
# Встановлення залежностей
npm install

# Запуск в режимі розробки
npm start

# Білд для продакшн
npm run build

# Деплой на GitHub Pages
npm run deploy
```

## 📁 Структура проекту

```
src/
├── assets/
│   ├── images/          # Зображення компонентів
│   └── styles.css       # Головні стилі
├── components/
│   ├── ComponentSection.js
│   └── TableOfContents.js
└── App.js              # Головний компонент
```

## 🎯 Додавання нових компонентів

1. Додайте зображення в `src/assets/images/`
2. Оновіть масив `componentData` в `src/App.js`:

```javascript
{
  id: 'your-component',
  name: 'YourComponent',
  category: 'Category',
  description: 'Опис компонента',
  image: './assets/images/your-component-preview.png',
  code: `// Ваш React код тут`
}
```

## 🌙 Автоматична тема

- **Темна тема**: 20:00 - 6:00
- **Світла тема**: 6:00 - 20:00
- **Ручне керування**: клік на кнопку теми вимикає автоматику
- **Повернення автоматики**: клік на кнопку годинника 🕐

## 🔧 Технології

- React 19
- CSS Custom Properties (CSS Variables)
- Google Fonts (Inter)
- GitHub Pages
- gh-pages

---

Створено з ❤️ для зручної документації React компонентів
