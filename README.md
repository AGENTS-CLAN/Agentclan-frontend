# 🚀 Agentclan Frontend  

---

## 📌 Features  
✅ **Built with Next.js** for fast performance  
✅ **Reusable components** (Navbar & Footer)  
✅ **Modern UI libraries** for styling  
✅ **Scalable and maintainable structure**  
✅ **Optimized animations with Framer Motion**  

---

## 🛠️ Tech Stack  
- **Framework:** Next.js  
- **Language:** JavaScript / TypeScript  
- **Styling:** Tailwind CSS, Aceternity UI, Magic UI, shadcn/ui, CSS Modules, Styled Components  
- **State Management:** Zustand (Optional)  
- **Animations:** Framer Motion  

---

## 📁 Project Structure  
```plaintext
📦 agentclan-frontend  
 ┣ 📂 components  
 ┃ ┣ 📂 common       # Navbar, Footer (shared across all pages)  
 ┃ ┗ 📂 pages1       # Six components for landing page  
 ┣ 📂 app  
 ┃ ┗ 📂 service      # Service-related frontend files  
 ┣ 📜 package.json  
 ┗ 📜 README.md  
```

---

## 📦 Dependencies  
### **Core Dependencies**  
```sh
npm install next react react-dom
```

### **Styling Dependencies**  
```sh
npm install tailwindcss aceternity magic-ui @shadcn/ui clsx
```

### **Utility Libraries**  
```sh
npm install axios zustand framer-motion
```
- `axios` → For handling API requests  
- `zustand` → Lightweight state management  
- `framer-motion` → Smooth animations  

---

## 🚀 Getting Started  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/agentclan-frontend.git
cd agentclan-frontend
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Run the Development Server  
```sh
npm run dev
```

### 4️⃣ Open in Browser  
Visit **[http://localhost:3000](http://localhost:3000)** to view the project.

---

## 📜 Scripts  
```plaintext
npm run dev    # Runs the app in development mode  
npm run start  # Runs the built app in production mode  
npm run lint   # Lints the project for errors  
```

---

## 🎨 Styling Guide  
This project follows **utility-first styling** using:  
- **Tailwind CSS** for base styles  
- **shadcn/ui** for ready-made UI components  
- **Aceternity & Magic UI** for additional design elements  

You can customize the theme in `tailwind.config.js`.  
