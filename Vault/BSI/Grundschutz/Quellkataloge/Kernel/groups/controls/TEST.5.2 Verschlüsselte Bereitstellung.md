---
tags: Cryptography
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.5.2 Verschlüsselte Bereitstellung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.5.2 - Verschlüsselte Bereitstellung
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [TEST.5 Bereitstellung](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.5%20Bereitstellung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Änderungen und Tests (TEST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST%20Änderungen%20und%20Tests.md)**<br> ***  &rarr; [Bereitstellung](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.5%20Bereitstellung.md) *** |  | SOLLTE | die Bereitstellung |  | verschlüsseln | Konfigurationshistorie | >Änderungen und Tests SOLLTE die Bereitstellung verschlüsseln.

> [!info]- Guidance
>Das Konzept der Bereitstellung (engl. Deployment oder Provisioning) bezieht sich hier auf den Vorgang des Übertragens, Installierens oder Aktivierens von Software-Artefakten, Konfigurationen, Skripten oder anderen digitalen Gütern von einer gesicherten Umgebung (z.B. Test- oder Staging-Umgebung) in die Ziel- oder Produktionsumgebung. Die Verschlüsselung dieser Bereitstellung meint dabei die kryptografische Sicherung des Datenstroms oder der übertragenen Daten während des Transports, sodass diese für unbefugte Dritte unlesbar sind. Diese Vorschrift dient primär dem Schutz vor der Offenlegung sensibler Daten oder der Manipulation der ausgelieferten Artefakte: Ein Angreifer, der den Übertragungsweg abhört, könnte ohne Verschlüsselung leicht auf vertrauliche Informationen zugreifen, etwa proprietären Quellcode oder sensible Konfigurationsparameter (wie Passwörter oder API-Schlüssel), was zur Geheimhaltung (Confidentiality) in der Institution im Widerspruch stünde. Außerdem könnte ein Man-in-the-Middle-Angriff die übertragenen Daten manipulieren und so bösartigen Code in die Produktionsumgebung einschleusen, bevor die Integrity-Checks greifen, was die Integrität der bereitgestellten Lösungen gefährden könnte. Technisch kann die Institution dies gewährleisten, indem alle Deployment-Pipelines ausschließlich gesicherte Kommunikationsprotokolle nutzen. Zusätzlich ist es sinnvoll die Bereitstellungs-Artefakte digital zu signieren und diese Signatur erst nach erfolgreicher End-zu-End-Integritätsprüfung (z.B. durch Prüfsummen wie SHA-256) auf dem Zielsystem zur Installation freigeben, was einen Manipulationsversuch im Transit erschwert.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1a332c02-bbc6-49f5-a123-ad41532409ac |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 1a332c02-bbc6-49f5-a123-ad41532409ac |
