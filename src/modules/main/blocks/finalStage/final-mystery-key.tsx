import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ETable } from "other/global/eTable/eTable";
import { DialogItemLayout } from "other/layouts/dialogItemLayout";
import { muiTheme } from "other/theme";

export const FinalMysteryKey = () => {
  const tableItems = [
    "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
    "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
    "სპეციალური ტურნირი Tournament Sharks II ადგილი",
    "სპეც. ტურნირი Tournament Sharks III ადგილი",
    "Holdem Grinders ლიდერბორდის გამარჯვებული",
    "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
    "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
    "სპეციალური ტურნირი Cashgame Sharks II ადგილი",
    "სპეციალური ტურნირი Tournament Sharks II ადგილი",
    "სპეც. ტურნირი Tournament Sharks III ადგილი",
    "Holdem Grinders ლიდერბორდის გამარჯვებული",
    "ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებულები",
  ];
  return (
    <DialogItemLayout title="მისტიური გასაღები">
      <Typography fontSize={14} textAlign="center">
        მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ
        საიდუმლო გასაღებს
      </Typography>

      <ETable
        body={tableItems.map((bodyItem, index) => (
          <Grid
            container
            key={index}
            alignItems="center"
            gap={1}
            sx={{
              bgcolor: "secondary.dark",
              outline: `2px solid ${muiTheme.palette.secondary.main}`,
              borderRadius: "75px",
              p: 2,
            }}
          >
            <Grid lg={1} xs={1} item>
              <Stack direction="row">
                <Stack
                  sx={{
                    bgcolor: "secondary.light",
                    width: { lg: "28px", md: "28px", sm: "22px", xs: "22px" },
                    height: { lg: "28px", md: "28px", sm: "22px", xs: "22px" },
                    borderRadius: "50%",
                    outline: `2px solid ${muiTheme.palette.secondary.main}`,
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography fontSize={{ lg: 14, md: 14, sm: 10, xs: 10 }}>
                    {index + 1}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid textAlign="left" lg={10} xs={10} item>
              <Typography fontSize={{ lg: 14, md: 14, sm: 10, xs: 10 }}>
                {bodyItem}
              </Typography>
            </Grid>
          </Grid>
        ))}
      />
    </DialogItemLayout>
  );
};
