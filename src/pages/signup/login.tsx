export const Login = () => {
    return (
        <>
            <section>
                <article>
                    <label htmlFor="">
                        email or nametag
                    </label>

                    <input type="Text" placeholder="Write you email or nametag" />
                </article>


                <article>
                    <label htmlFor="">
                        password
                    </label>

                    <input type="text" placeholder="Write your password" />
                </article>
            </section>

            <footer>
                <p>
                    It isn't a our user?
                    <a href="#">register now!</a>
                </p>
            </footer>
        </>
    )
}