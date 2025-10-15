import { toast } from "react-toastify";

// ✅ Get installed app IDs from localStorage
const getStroedApp = () => {
  const storeAPP = localStorage.getItem("installList");
  if (storeAPP) {
    return JSON.parse(storeAPP);
  } else {
    return [];
  }
};

// ✅ Add new app ID to localStorage with toast
const addToStoredDB = (id, appTitle) => {
  const storeAPPData = getStroedApp();

  if (storeAPPData.includes(id)) {
    toast.info(`"${appTitle}" is already installed`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  } else {
    storeAPPData.push(id);
    localStorage.setItem("installList", JSON.stringify(storeAPPData));

    toast.success(`"${appTitle}" installed successfully! 🎉`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }
};

export { addToStoredDB, getStroedApp };
