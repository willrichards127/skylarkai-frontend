import { memo, useCallback, useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CompanyCard } from "./CompanyCard";
import { NewCompanyModal } from "./NewCompanyModal";
import { useGetTargetCompaniesQuery } from "../../../../redux/services/workOrderApi";
import { useNavigate } from "react-router-dom";

const CompaniesContainer = memo(() => {
  const navigate = useNavigate();
  const { isFetching, data } = useGetTargetCompaniesQuery();
  const [addCompanyModal, showAddCompanyModal] = useState<boolean>(false);

  /** FIXME: React Navigate */
  const onCard = useCallback(
    (company: { id: number; company_name: string }) => {
      navigate(
        `/portal/companies/${company.id}?company_name=${company.company_name}`
      );
    },
    [navigate]
  );

  const onAddNewCompany = useCallback(() => {
    showAddCompanyModal(true);
  }, []);

  return (
    <Box sx={{ height: "100%", overflowY: "auto", py: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Companies
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onAddNewCompany}
        >
          Add Company
        </Button>
      </Box>
      {isFetching ? (
        <Box textAlign="center" p={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            py: 4,
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {(data || []).map((card: any) => (
            <CompanyCard
              key={card.id}
              label={card.company_name}
              logo={card.logo}
              onCard={() => onCard(card)}
              createdAt={card.created_at}
            />
          ))}
        </Box>
      )}

      {addCompanyModal && (
        <NewCompanyModal
          open={addCompanyModal}
          onClose={() => showAddCompanyModal(false)}
        />
      )}
    </Box>
  );
});

CompaniesContainer.displayName = "CompaniesContainer";

export default CompaniesContainer;
