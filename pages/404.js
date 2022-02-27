import React from "react";
import css from "./404.module.css";

export default function error404() {
    return (
        <>
            <div className={css.background}></div>

            <div className={css.info}>
                <div className={css.glitchBloc}>
                    <p className={css.invisibleText}>404</p>
                    <p className={css.glitchedAnim}>404</p>
                    <p className={css.glitchedAnim}>404</p>
                    <p className={css.glitchedAnim}>404</p>
                </div>
                <p className={css.txtInfo}> La page n'existe pas ...</p>
            </div>
        </>
    );
}
