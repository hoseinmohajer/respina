import React, {useState} from 'react';
import {BookcaseContainer, Card} from './style';
import {Spinner} from "../../../../../../components/spinner";
import {Modal} from "../../../../../../components/modal";

export const Bookcase = (props) => {
	const [showModal, modalToggle] = useState(false);
	const [modalData, setModalData] = useState('');
	const modalHandler = id => {
		const _modalData = props.data.filter((item) => item.author === id);
		setModalData(_modalData[0]);
		modalToggle(true);
	};
	return (
		<BookcaseContainer>
			{showModal && (
				<Modal
					show={showModal}
					closeHandler={() => modalToggle(false)}
					header={{title: ''}}
					body={
						<React.Fragment>
							<img className="modal-image" src={modalData.image} alt={modalData.book}/>
							<div className="book-content">
								<div className="book-info">
									{`${modalData.book} | ${modalData.author}`}
								</div>
								<div className="author">
									نویسنده: {modalData.author}
								</div>
								<div className="translator">
									مترجم: {modalData.translator}
								</div>
								<div className="abstract">
									<h5>بخشی از کتاب {modalData.book}</h5>
									<p>{modalData.abstract}</p>
								</div>
							</div>
						</React.Fragment>
					}
				/>
			)}
			{props.data && props.data.length !== 0 && props.data.map((book, key) => {
				return (
					<Card key={key} onClick={() => modalHandler(book.author)}>
						<img className='card-image' src={book.image} alt={book.book}/>
						<div className="card-description">
							<div className="title">{book.book}</div>
							<div className="text">{book.author}</div>
						</div>
					</Card>
				);
			})}
			{props.data && props.data.length === 0 &&
				<Spinner/>
			}
		</BookcaseContainer>
	);
};
