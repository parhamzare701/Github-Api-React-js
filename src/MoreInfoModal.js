import React from "react";
const MoreInfoModal = ({ onClose, data }) => {
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal__container' onClick={(e) => e.stopPropagation()}>
                <div className="modal__container__header">
                    <strong className="modal__container__header__text">{data.name}</strong>
                </div>
                <div className="modal__container__information">
                    <span className="modal__container__information__text"><strong>owner : </strong>{data.owner.login}</span>
                    <span className="modal__container__information__text"><strong>visibility : </strong>{data.visibility}</span>
                    <span className="modal__container__information__text"><strong>allow forking : </strong>{String(data.allow_forking)}</span>
                    <span className="modal__container__information__text"><strong>forks : </strong>{data.forks}</span>
                    <span className="modal__container__information__text"><strong>watchers : </strong>{data.watchers}</span>
                    <span className="modal__container__information__text"><strong>stars : </strong>{data.stargazers_count}</span>
                    <span className="modal__container__information__text"><strong>topics : </strong>{data.topics}</span>
                    <span className="modal__container__information__text"><strong>main language  : </strong>{data.language}</span>
                    <span className="modal__container__information__text"><strong>clone url : </strong>{data.clone_url}</span>
                </div>
                <div className="modal__container__btn">
                    <button className="modal__container__btn--close" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};
export default MoreInfoModal;