"use client"
import RepositoryCard from "../components/RepositoryCard";
import UserProfile from "../components/UserProfile";
import styles from "./styles.module.scss";
import NotFoundImage from "../assets/not-found.svg";
import Image from "next/image";
import { useState } from "react";
import { GithubProfileType } from "../types/GithubProfileType";
import { GithubReposType } from "../types/GithubReposType";
import LoadingComponent from "../components/LoadingComponent";

export default function Home() {
    const [searchInput, setSearchInput] = useState("")
    const [user, setUser] = useState<GithubProfileType | null>(null)
    const [repos, setRepos] = useState<GithubReposType[]>([])
    const [loading, setLoading] = useState(false)


    async function handleSearchUser() {
        if (!searchInput) {
            setUser(null)
            return

        }

        try {
            setLoading(true)

            const response = await fetch(
                `https://api.github.com/users/${searchInput}`
            );
            const data: GithubProfileType = await response.json();

            setUser(data)

            const responseRepos = await fetch(
                `https://api.github.com/users/${data.login}/repos`
            );
            const dataRepos: GithubReposType[] = await responseRepos.json();

            setRepos(dataRepos.slice(0.6))

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <main className={styles.main}>
            <div className={styles["main--search"]}>
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                />
                <button className="btn--green" onClick={handleSearchUser}>
                    buscar
                </button>
            </div>
            <div className={styles["main--body"]}>
                {loading ? (
                    <LoadingComponent />
                ) : user?.name ? (
                    <div>
                        <UserProfile profile={user} />
                        <div>
                            <div className={styles["container-projects"]}>
                                {repos.map((repo) => (
                                    <RepositoryCard repo={repo} key={repo.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={"not-found"}>
                        <Image src={NotFoundImage} alt="not found" width={400} height={439} />
                        <h3>Usuário não encontrado!</h3>
                    </div>
                )}


            </div>
        </main >


    );
}
