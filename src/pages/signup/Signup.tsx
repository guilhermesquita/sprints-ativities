export const Signup = () => {
    return (
        <>
            <section>
                <article>
                    <label htmlFor="">
                        email
                    </label>

                    <input type="Text" placeholder="Write you email or nametag" />
                </article>

                <article>
                    <label htmlFor="">
                        nametag
                    </label>

                    <input type="Text" placeholder="Write you email or nametag" />
                </article>

                <article>
                    <label htmlFor="">
                        password
                    </label>

                    <input type="Text" placeholder="Write you email or nametag" />
                </article>
            </section>

            <footer>
                <p>
                    Do you have a account?
                    <a href="#">lets go to login!</a>
                </p>
            </footer>
        </>
    )
}