import ShareImg from "../../assets/share.svg";
import PenImg from "../../assets/pen.svg";
import DeleteImg from "../../assets/delete.svg";
import styles from "./etcicon.module.css";
import { useState } from "react";
import ShareModal from "./shareModal";

interface Props {
  openModal : (
    about: string,
    btn: string,
    isDelete: boolean,
    folderName? : string,
  ) => void;
  folderName : string;
  currentFolderId : number | null;
}

function EtcIcon({ openModal, folderName, currentFolderId } : Props) {
  const [showShareModal, setShowShareModal] = useState(false);

  const openShareModal = () => {
    setShowShareModal(true);
  };
  const closeShareModal = () => {
    setShowShareModal(false);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.set} onClick={openShareModal}>
          <img src={ShareImg} alt="공유를 나타내는 이미지" />
          <span>공유</span>
        </button>
        <button
          className={styles.set}
          onClick={() => openModal("폴더 이름 변경", "변경하기", false)}
        >
          <img src={PenImg} alt="수정을 나타내는 이미지" />
          <span>이름 변경</span>
        </button>
        <button
          className={styles.set}
          onClick={() => openModal("폴더 삭제", "", true, folderName)}
        >
          <img src={DeleteImg} alt="삭제를 나타내는 이미지" />
          <span>삭제</span>
        </button>
      </div>
      {showShareModal && <ShareModal onClick={closeShareModal} folderName={folderName} currentFolderId={currentFolderId}></ShareModal>}
    </>
  );
}

export default EtcIcon;
