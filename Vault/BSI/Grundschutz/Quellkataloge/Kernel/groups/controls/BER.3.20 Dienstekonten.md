---
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.20 Dienstekonten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.20 - Dienstekonten
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Zugangskonten](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.3%20Zugangskonten.md) *** | Hostsysteme | SOLLTE | eine automatische Verwaltung der Zugangsdaten | von Dienste-Konten | aktivieren | Inventar Berechtigungen | >Berechtigung für Hostsysteme SOLLTE eine automatische Verwaltung der Zugangsdaten von Dienste-Konten aktivieren.

> [!info]- Guidance
>Eine automatische Verwaltung der Zugangsdaten von Dienste-Konten bezeichnet in diesem Kontext die technische Fähigkeit, Passwörter, Schlüssel oder Tokens solcher Konten – im Englischen häufig als service accounts oder machine identities bezeichnet – durch spezialisierte Systeme ohne manuelles Eingreifen zu erzeugen, zu speichern, regelmäßig zu erneuern und kontrolliert zu verteilen. Zugangsdaten sind hierbei sämtliche Authentifizierungsinformationen, die einem Dienst ermöglichen, auf Ressourcen anderer Systeme zuzugreifen, beispielsweise API-Schlüssel, SSH-Keys oder Anmeldedaten für Datenbanken. Dienste-Konten werden meist von Applikationen, Hintergrunddiensten oder Automatisierungsprozessen genutzt und unterscheiden sich von personenbezogenen Benutzerkonten dadurch, dass sie keinem Individuum zugeordnet sind, sondern einem technischen Zweck dienen. Erfolgt bei Zugangskonten für automatisierte Dienste eine automatische Rotation von Passwörtern oder Anmeldezertifikaten, so werden statische Passwörter, die Ablage von Zugangsdaten auf Netzlaufwerken oder plötzliche Fehlfunktionen durch Zertifikatsablauf vermieden. Ihre automatische Verwaltung kann durch zentrale Passworttresore (password vaults), Identitätsmanagementsysteme (Identity and Access Management, IAM) oder Secret-Management-Lösungen realisiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 403fac1f-a78a-4548-858e-a06168253dea |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 403fac1f-a78a-4548-858e-a06168253dea |
