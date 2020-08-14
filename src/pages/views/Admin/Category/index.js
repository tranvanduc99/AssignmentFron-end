import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const Category = ({ category, onRemovect }) => {
    const removect = (id) => {
        onRemovect(id)
    }
    return (
        <div className="section__content section__content--p30">
            <div className="container-fluid">
                <div className="row">
                    <div className="table-responsive table--no-card m-b-30">
                        <table className="table table-borderless table-striped table-earning">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th className="text-center">Acction</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map(({ id, danhmuc, mota }, key) => (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{danhmuc}</td>
                                        <td>{mota}</td>
                                        <td className="text-center">
                                            <button className="btn btn-danger" onClick={() => removect(id)} >Delete</button>&nbsp;
                                             <Link to={`/admin/category/${id}`} className="btn btn-primary">Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link className="btn btn-primary" to="/admin/addcategory">New Category</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

Category.propTypes = {

}

export default Category
