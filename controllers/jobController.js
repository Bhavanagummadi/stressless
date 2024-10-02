import 'express-async-errors';
import Job from "../models/jobModel.js";


export const getAllJobs = async (req, res) => {
  const jobs=await Job.find({});
  res.status(200).json({ jobs });
};

export const createJob=async (req,res) => {
  const {company,position}=req.body;
  const job=await Job.create({company,position})
  res.status(201).json({job});
};

export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job=await Job.findById(id);
  if (!job) {
    return res.status(404).json({ msg: "No Such Job" });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob=await Job.findByIdAndUpdate(id,req.body,{new:true});
  if (!updatedJob) {
    return res.status(404).json({ msg: "Job Not Found" });
  }
  res.status(200).json({ msg: "Job Updated", updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const deletedJob=await Job.findByIdAndDelete(id);
  if (!deletedJob) {
    return res.status(404).json({ msg: "Job Not Found" });
  }
  res.status(200).json({ msg: "Job Deleted",deletedJob});
};

