import { useContext } from "react";
import { PermisionContext } from "../../context/permision.context";

const PermisionModal = () => {
    const {setIsPermission} = useContext(PermisionContext)!
    return (
        <div className="fixed top-0 left-0 px-8 w-full h-full bg-[#000000] bg-opacity-50 flex flex-col justify-center items-center z-20">
            <p>Please allow motion permission to be able to move</p>
            <div className="flex gap-2 w-full">
                <button onClick={() => [requestMotionPermission, setIsPermission(true)]} className="bg-green-600 text-white w-full py-2 mt-4 border border-transparent hover:bg-opacity-30 hover:border-green-600 transition-all duration-300">Allow</button>
                <button onClick={() => setIsPermission(true)} className="bg-red-600 text-white w-full py-2 mt-4 border border-transparent hover:bg-opacity-30 hover:border-red-600 transition-all duration-300">Deny</button>
            </div>
        </div>
    )
}

export default PermisionModal

const requestMotionPermission = async () => {
    // @ts-ignore
    if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
      try {
        // @ts-ignore
        const permission = await DeviceMotionEvent.requestPermission();
        if (permission === "granted") {
            window.addEventListener('devicemotion', () => {});
        } else {
          console.warn("❌ Dostęp do czujników ruchu odrzucony przez użytkownika.");
        }
      } catch (error) {
        console.error("❌ Błąd podczas żądania dostępu do czujników:", error);
      }
    } else {
      console.log("🔹 DeviceMotionEvent.requestPermission() nie jest wymagane na tym urządzeniu.");
    }
};