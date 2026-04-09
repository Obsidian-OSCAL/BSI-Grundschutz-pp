---
tags: Credential_Stuffing_Privilege_Escalation_Password_Policy
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.6.6 Blockieren von Passwort Recycling
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.6.6 - Blockieren von Passwort Recycling
Tags: "[Credential Stuffing](tags_Credential Stuffing)" "[Privilege Escalation](tags_Privilege Escalation)" "[Password Policy](tags_Password Policy)"
Gruppe: [BER.6 Passwortgebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.6%20Passwortgebrauch.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Passwortgebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.6%20Passwortgebrauch.md) *** | Nutzende | SOLLTE | die Wiederverwendung von Passwörtern |  | blockieren | Konfigurationshistorie | >Berechtigung für Nutzende SOLLTE die Wiederverwendung von Passwörtern blockieren.

> [!info]- Guidance
>Die Wiederverwendung von Passwörtern („password reuse“) ist die Nutzung identischer oder bereits früher verwendeter Passwörter für verschiedene Konten, Systeme oder aufeinanderfolgende Authentifizierungsvorgänge. Die Blockierung der Passwortwiederverwendung bedeutet hier, dass das Berechtigungsmanagementsystem („access management system“) technisch verhindert, dass ein neues Passwort mit einem zuvor verwendeten identisch ist oder einer vordefinierten Anzahl früherer Passwörter entspricht. Dies könnte nicht nur bei Wiederverwendung einer Person problematisch sein, sondern auch bei einer systemübergreifenden Fehlkonfiguration: Ein typisches Szenario wäre, dass in einer Institution mehrere Arbeitsplatzrechner mit identischen lokalen Administratorpasswörtern konfiguriert sind („local admin password reuse“). Wird ein einzelner Rechner durch Schadsoftware oder physischen Zugriff kompromittiert, könnte ein Angreifer dieses Passwort anschließend nutzen, um sich mit denselben Anmeldeinformationen lateral auf weitere Systeme auszubreiten. Die Wiederverwendung des lokalen Administratorpassworts könnte somit eine vollständige Kompromittierung der internen IT-Infrastruktur ermöglichen. Diese Anforderung adressiert den Schutz vor solchen Angriffen, die sich aus der Wiederverwendung kompromittierter Anmeldeinformationen ergeben könnten, etwa durch Credential-Stuffing oder Brute-Force-Angriffe auf bekannte Passwortmuster. Blockieren kann das Risiko verringern, dass ein Angreifer durch bekannte Passwörter unbefugten Zugang zu Konten erhält. Hierzu können zum einen eine lokale Passworthistorie oder zum anderen elektronische Passwortmanager genutzt werden, die unabhängige sichere Passwörter generieren, wo die Wahrscheinlichkeit einer Passwortwiederholung ausgeschlossen werden kann.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d7c76736-0c1d-4693-92d5-894a8b740204 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | d7c76736-0c1d-4693-92d5-894a8b740204 |
