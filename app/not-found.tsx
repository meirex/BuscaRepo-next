import Image from "next/image";
import NotFoundImage from "./assets/not-found.svg";

export default function NotFound() {
    return (
        <main className="not-found" style={{ marginTop: "113px" }}>
            <Image src={NotFoundImage} width={400} height={439} alt="not-found" />
            <h1>404 - Not Found</h1>

        </main>
    );
}