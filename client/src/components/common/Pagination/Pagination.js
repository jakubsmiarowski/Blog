import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Pagination.scss';

class Pagination extends React.Component {

    state = {
        presentPage: this.props.initialPage || 1
    }

    changePage = (newPage) => {
        const { onPageChange, perPage } = this.props;
        this.setState({ presentPage: newPage });
        onPageChange(newPage, perPage);
    }

    render() {

        const { pages } = this.props;
        const { presentPage } = this.state;
        const { changePage } = this;

        let prevLink = '';
        if(presentPage > 1) {
            prevLink = <li
                key="0"
                onClick={() => {changePage(presentPage-1) }}
                className="pagination__list__item">
                    <FontAwesomeIcon
                    icon={faChevronLeft} />
                </li>
        }

        let nextLink = '';
        if(presentPage < pages) {
            nextLink = <li
                key={pages}
                onClick={() => {changePage(presentPage+1) }}
                className="pagination__lit__item">
                    <FontAwesomeIcon
                    icon={faChevronRight} />
                </li>
        }

        return (
            <div className="pagination">
                <ul className="pagination__list">

                    {prevLink}

                    {[...Array(pages)].map((el, page) =>
                    <li
                    key={++page}
                    onClick={() => { changePage(page) }}
                    className={`pagination__list__item${((page) === presentPage) ? ' pagination__list__item--active' : ''}`}>
                    {page}
                    </li>
                    )}

                    {nextLink}

                </ul>
            </div>
        );
    }
}

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    initialPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
    perPage: PropTypes.number
};

export default Pagination;