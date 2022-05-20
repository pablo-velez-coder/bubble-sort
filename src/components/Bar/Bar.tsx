import styles from './styles.module.scss'
interface BarProps {
  length: number;
}

export default function Bar({length}: BarProps) {

  const BarStyles = {
    height: `${length}px`,
  }
  return <div className={styles.BarContainer}>
  <div 
  className={styles.blankSpace}
  />
  <div
  style={BarStyles}
  className={styles.Bar} />
    
  </div>;
}
