import React from 'react';

import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '15px 45px 20px 45px'
    }
};

class Sort extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hasChanged: false,
            modalIsOpen: false,
            size: ''
        }

        this.sortByPriceAsc1 = this.sortByPriceAsc1.bind(this);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };
    sortByPriceAsc1(value) {

        if (value === 'Asc') {

            this.setState({ hasChanged: true });
            this.props.onsortByPriceAsc();

        }

        else if (value === 'Desc') {

            this.setState({ hasChanged: true });
            this.props.onsortByPriceDesc();

        }

        else if (value === 'Dis') {

            this.setState({ hasChanged: true });
            this.props.onsortByPriceDis();

        }
        else {
            this.setState({ hasChanged: true });
            this.props.onsortByPriceAsc();

        }

        this.closeModal();
    }


    handleChange(event) {
        this.setState({
            size: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.sortByPriceAsc1(this.state.size);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {

        return (


            <div className="container">
                {/*  <button onClick={() => this.sortByPriceAsc1()}></button>*/}
                
                <div className="row">
                    <div className="col s12 applyButton">
                        <button type="button" onClick={this.openModal} className="btn btn-primary btn-primarySpec">Apply Sorting</button>
                    </div>

                    {/*<div className="col s3"><a href="#" onClick={this.openModal}>Price -- High Low</a></div>
                    <div className="col s3"><a href="#" onClick={this.openModal}>Price -- Low High</a></div>
                    <div className="col s3"><a href="#" onClick={this.openModal}>Discount(Max to Min)</a></div>*/}
                </div>


                <div>

                    <Modal isOpen={this.state.modalIsOpen} style={customStyles}>

                        <h5>Sort Option</h5>
                        <hr></hr>
                        <span style={{ position: "absolute", cursor: "pointer", top: "2px", right: "12px" }}  onClick={this.closeModal}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></span>

                        <form onSubmit={this.handleSubmit}>
                            <ul className="sortOption">
                                <li>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Asc"
                                            checked={this.state.size === "Asc"}
                                            onChange={this.handleChange}
                                            className="optionClass"
                                        />
                                        <strong>Low to High</strong>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Desc"
                                            checked={this.state.size === "Desc"}
                                            onChange={this.handleChange}
                                            className="optionClass"
                                        />
                                        <strong>High to Low</strong>
                                    </label>
                                </li>

                                <li>
                                    <label>
                                        <input
                                            type="radio"
                                            value="Dis"
                                            checked={this.state.size === "Dis"}
                                            onChange={this.handleChange}
                                            className="optionClass"
                                        />
                                        <strong>Discount(max. to min.)</strong>
                                    </label>
                                </li>
                            </ul> 
                            <button type="submit" style={{marginTop:"12px"}} class="btn btn-primary submit-button">Apply</button>

                        </form>
                    </Modal>
                </div>


            </div>


        );
    }

}

export default Sort;