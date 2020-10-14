import React, { Component } from "react";
import { connect } from "react-redux";

export const Aside = () => {
  return <div>aside</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
