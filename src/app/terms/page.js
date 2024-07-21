import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Terms of Service',
  };

export default function Terms() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Terms of Service</h1>
                    <h3 className={styles.subTitle}>1. Acceptance of Terms</h3>
                    <p className={styles.content}>
                        By accessing and using Ancients News, you accept and agree to be bound by the terms and provisions of
                        this agreement.
                    </p>
                    <h3 className={styles.subTitle}>2. Changes to Terms</h3>
                    <p className={styles.content}>
                        Ancients News reserves the right to modify these terms at any time.Changes will be posted on this page,
                        and continued use of the site signifies acceptance of these changes.
                    </p>
                    <h3 className={styles.subTitle}>3. Use of the Site</h3>
                    <p className={styles.content}>
                        You agree to use Ancients News only for lawful purposes.You must not use the site to transmit any harmful
                        or illegal content.
                    </p>
                    <h3 className={styles.subTitle}>4. Privacy Policy</h3>
                    <p className={styles.content}>
                        Your use of Ancients News is also governed by our Privacy Policy, which can be found&nbsp;
                        <Link className={styles.links} href='https://www.iubenda.com/privacy-policy/43441192'>here</Link>.
                    </p>
                    <h3 className={styles.subTitle}>5. Disclaimer of Warranties</h3>
                    <p className={styles.content}>
                        Ancients News is provided on an &quot;as is&quote; and &quote;as available&quote; basis.We make no warranties or representations
                        regarding the accuracy or completeness of the content.
                    </p>
                    <h3 className={styles.subTitle}>6. Limitation of Liability</h3>
                    <p className={styles.content}>
                        Ancients News will not be liable for any damages arising from the use or inability to use the site.
                    </p>
                    <h3 className={styles.subTitle}>6. Contact Information</h3>
                    <p className={styles.content}>
                        For any questions about these terms, please&nbsp;
                        <Link className={styles.links} href='mailto:weihenang02@gmail.com'>contact us</Link>.
                    </p>
                </div>
            </div>
        </>
    );
}