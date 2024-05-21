import { useRef, MouseEventHandler, MouseEvent} from "react";
import styles from "./CardKebab.module.css";

interface Props {
  closeKebab : () => void;
}

function CardKebab({ closeKebab} : Props) {
  const kebabRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent<HTMLDivElement>): void => {
    if (kebabRef.current && !kebabRef.current.contains(e.target as HTMLElement)) {
      closeKebab(); // 케밥 창을 닫는 함수 호출
    }
  };

  return (
    <div
      className={styles.kebab__container}
      onClick={(e) => {
        e.stopPropagation(); // 상위 링크 클릭 방지
        e.preventDefault(); // 기본 링크 이벤트 방지
      }}
      ref={kebabRef}
    >
      <button className={styles.kebab__btn}>삭제하기</button>
      <button className={styles.kebab__btn}>폴더에 추가</button>
      {/* 케밥 창을 감싸는 영역에 클릭 이벤트 추가 */}
      <div className={styles.overlay} onClick={handleClickOutside}></div>
    </div>
  );
}

export default CardKebab;
