import { useEffect, useState } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth } from "../firebase/client"; // Your firebase config

export const useAuth = () => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // User is signed in
            } else {
                setUser(null); // No user is signed in
            }
            setLoading(false); // Loading is complete
        });

        // Clean up subscription on unmount
        return () => unsubscribe();
    }, []);

    return { user, loading };
};
