import { Box, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { ETable } from "other/global/eTable/eTable";
import { muiTheme } from "other/theme";

import example from "../../../../other/assets/example-icon.png";

export const CashTop20 = ({ title }: { title: string }) => {
  const holdemTop20 = {
    head: ["ადგილი", "ვაუჩერი", "პრიზი"],
    body: [
      {
        voucher: "—",
        prize: "A კატეგორიის საგზური",
      },
      {
        voucher: "—",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "1500₾",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "1200₾",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "1000₾",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "800₾",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "—",
        prize: "A კატეგორიის საგზური",
      },
      {
        voucher: "—",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "1500₾",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "1200₾",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "1000₾",
        prize: "B კატეგორიის საგზური",
      },
      {
        voucher: "800₾",
        prize: "B კატეგორიის საგზური",
      },
    ],
  };
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="row"
        gap={2}
      >
        <Typography variant="h3">{title}</Typography>
        <Tooltip title="დამატებითი ინფორმაცია">
          <Box component="img" src={example} />
        </Tooltip>
      </Stack>
      <ETable
        head={holdemTop20.head}
        body={holdemTop20.body.map((bodyItem, index) => (
          <Grid
            container
            key={index}
            justifyContent="space-between"
            sx={{
              bgcolor: "secondary.dark",
              outline: `2px solid ${muiTheme.palette.secondary.main}`,
              borderRadius: "75px",
              p: 2,
            }}
          >
            <Grid lg={12 / holdemTop20.head.length} item>
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
            <Grid textAlign="center" lg={12 / holdemTop20.head.length} item>
              <Typography fontSize={{ lg: 14, md: 14, sm: 10, xs: 10 }}>
                {bodyItem.voucher}
              </Typography>
            </Grid>
            <Grid textAlign="center" lg={12 / holdemTop20.head.length} item>
              <Typography fontSize={{ lg: 14, md: 14, sm: 10, xs: 10 }}>
                {bodyItem.prize}
              </Typography>
            </Grid>
          </Grid>
        ))}
      />
    </>
  );
};
