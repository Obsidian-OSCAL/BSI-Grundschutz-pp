---
tags: Security_by_Design
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.2.5 Einschränkung des Zugriffs auf Zugangsdaten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.2.5 - Einschränkung des Zugriffs auf Zugangsdaten
Tags: "[Security by Design](tags_Security by Design)"
Gruppe: [DEV.2 Softwareentwicklung - Security by Design](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Security by Design](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md) *** | Anwendungen | SOLLTE | den lesenden und schreibenden Zugriff auf Zugangsdaten |  | einschränken | Inventar Berechtigungen | >Entwicklung für Anwendungen SOLLTE den lesenden und schreibenden Zugriff auf Zugangsdaten einschränken.

> [!info]- Guidance
>Von der Anwendung verwendete Zugangsdaten können z.B. API-Schlüssel oder Datenbankanmeldeinformationen sein. Statt diese im Quellcode zu hinterlegen ist es besser, sie in Umgebungsvariablen oder sogenannten Vaults zu speichern. Hierbei hilft es auch, solche Daten mit .gitignore-Regeln aus der Versionskontrolle auszuschließen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3a2e18f2-8f77-4f7d-9fc9-cfadbf576c04 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 3a2e18f2-8f77-4f7d-9fc9-cfadbf576c04 |
