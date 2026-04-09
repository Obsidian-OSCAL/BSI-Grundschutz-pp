---
tags:
- Automatic_Session_Locking_Zero_Trust
- ber312-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.12 Sperre der Anwendung bei Inaktivität
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.12 - Sperre der Anwendung bei Inaktivität
Tags: "[Automatic Session Locking](tags_Automatic Session Locking)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md) *** | Anwendungen | SOLLTE | eine Sperre bei Inaktivität | nach {{einer Frist}} | aktivieren | Konfigurationshistorie | >Berechtigung für Anwendungen SOLLTE eine Sperre bei Inaktivität nach {{ insert: param, ber.3.12-prm1 }} aktivieren.

> [!info]- Guidance
>Kann je nach Anmeldeweg durch eine Abmeldung (Automatic Session Locking) direkt an der Anwendung, über Single-Sign-On oder (bei Anmeldung über das Netz) die Trennung der Netzverbindung umgesetzt werden. Eine längere Inaktivität kann z.B. 5-15 Minuten lang sein. Verfügt die Anwendung über keine eigene Authentifizierungsmethode, so ist die Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5c8bb88d-6692-4904-908a-ed3f7a81b34e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 5c8bb88d-6692-4904-908a-ed3f7a81b34e |
