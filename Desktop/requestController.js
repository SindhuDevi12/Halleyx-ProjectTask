exports.addProductController = async (req, res) => {
  try {
    const { name, type, location } = req.body;
    // save or respond
    res.status(200).send({
      message: "Product added successfully",
      data: { name, type, location },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in add product API",
      error,
    });
  }
};
// View all requests
const viewAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "All requests fetched", data: requests });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch requests", error });
  }
};
// Delete a request by ID
const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Request.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.status(200).json({ message: "Request deleted successfully", data: deleted });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete request", error });
  }
};
