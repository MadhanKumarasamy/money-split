'use client'
import { Card } from "@/components/Card/Card";
import styles from "./Dashboard.module.scss";
import { Navigation } from "@/components/Navigation/Navigation";
import { useState } from "react";


export const Dashboard = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            <Navigation />
            <Card className={styles.dashboardCard}>
                <div>
                    <h2>Madhan1 account</h2>
                    <p>You will Get: 1000</p>
                    <p>You need to give: 100</p>
                    <br />
                    <h2>Madhan2 account</h2>
                    <p>You will Get: 1000</p>
                    <p>You need to give: 100</p>
                </div>
                <div>
                    <button className={styles.expenseBtn} onClick={(e) => { e.preventDefault(); setShowPopup(true) }}>
                        Add Expense</button>
                </div>
            </Card>
            {
                showPopup && (
                    <Card id="popup1" className={styles.overlay}>
                        <form action="submit" className={styles.popup} onSubmit={(e) => { e.preventDefault(); setShowPopup(false) }}>
                            <h2>Add expense</h2>
                            <ul>
                                <li>
                                    <label>Enter amount:</label>
                                    <input type="number" placeholder="Enter amount..." name="amount" required={true} />
                                </li>
                                <li>
                                    <label htmlFor="name">Paid by:</label>
                                    <select name="name" id="pet-select" required>
                                        <option value="">--Please choose an option--</option>
                                        <option value="Madhan">Madhan</option>
                                        <option value="Farook">Farook</option>
                                        <option value="Mohan">Mohan</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Share with:</label>
                                    <div className={styles.checkbox}>
                                        <input type="checkbox" id="person1" name="person1" value="Madhan" />
                                        <label htmlFor="person1">Madhan</label>
                                        <br />
                                        <input type="checkbox" id="person2" name="person2" value="Mohan" defaultChecked />
                                        <label htmlFor="person2">Mohan</label>
                                        <br />
                                        <input type="checkbox" id="person3" name="person3" value="Farook" />
                                        <label htmlFor="person3">Farook</label>
                                    </div>

                                </li>
                                <li>
                                    <label htmlFor="splitType">Split type:</label>
                                    <select name="splitType" id="split-type" required>
                                        <option value="equally" defaultChecked>Equally</option>
                                    </select>
                                </li>
                                <li>
                                    <label>Comments:</label>
                                    <textarea placeholder="Comments" />
                                </li>
                            </ul>
                            <button className={styles.close} onClick={() => setShowPopup(false)}>&times;</button>
                            <div>
                                <button type="submit" className={styles.expenseBtn} onClick={() => setShowPopup(false)}>Add</button>
                            </div>
                        </form>
                    </Card>
                )
            }
        </>
    )
}