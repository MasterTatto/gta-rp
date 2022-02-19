import React from 'react';
import s from './style.module.css'
import Button from "../../../common/button/button";

type RootServerInfoType = {
    setShowRootServer: (e: boolean) => void
    setCheckedRoot: (e: boolean) => void
}

const RootServerInfo = ({setShowRootServer, setCheckedRoot}: RootServerInfoType) => {
    const handleBack = () => {
        setShowRootServer(false)
    }
    const handleAcceptRoot = () => {
        setShowRootServer(false)
        setCheckedRoot(true)
    }
    return (
        <div className={s.root_info}>
            <h2>Правила сервера</h2>
            <p>Role Play - игровой режим сервера, основой которого является отыгровка игроком выбранной роли
                (полицейский/бандит). Каждая отыгровка воспроизводится благодаря серверным командам: /me, /do, /todo.
                Также отыгровки должны не нарушать правила сервера, за это Вы можете получить наказание на сервере.
                Role Play - игровой режим сервера, основой которого является отыгровка игроком выбранной роли <br/>
                (полицейский/бандит). Каждая отыгровка воспроизводится благодаря серверным командам: /me, /do, /todo.
                Также отыгровки должны не нарушать правила сервера, за это Вы можете получить наказание на сервере.<br/>
                Role Play - игровой режим сервера, основой которого является отыгровка игроком выбранной Role Play -
                игровой режим сервера, основой</p>
            <div className={s.root_info__box_button}>
                <Button onClick={handleBack} title={'Отмена'} className={`${s.btn} ${s.btn_1}`}/>
                <Button onClick={handleAcceptRoot} title={'Согласен'} className={`${s.btn} ${s.btn_2}`}/>
            </div>

        </div>
    );
};

export default RootServerInfo;
