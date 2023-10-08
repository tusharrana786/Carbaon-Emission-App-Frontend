import Avatar from "@mui/material/Avatar"

export default function CustomAvatar({number, color}){
    return (
      <Avatar
        sx={{
          display: "inline-flex",
          width: "28px",
          height: "28px",
          bgcolor: color,
          fontSize: "18px",
          fontWeight: "500",
          lineHeight: "21.6px"
        }}
      >
        {number}
      </Avatar>
    )
}